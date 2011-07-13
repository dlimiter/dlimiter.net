module Jekyll
  # Applies YUICompressor compression to js files
  # You must specify an empty YAML front matter
  # at the beginning of the file.
  class JsMinifier < Converter
    safe true
    priority :low

    def setup
      return if @setup
      require 'yuicompressor'
      @setup = true
    rescue LoadError
      STDERR.puts 'You are missing a library required for yuicompressor. Please run:'
      STDERR.puts '  $ [sudo] gem install yuicompressor'      
      raise FatalException.new("Missing dependency: yuicompressor")
    end

    def matches(ext)
      ext =~ /js/i
    end

    def output_ext(ext)
      ".js"
    end

    def convert(content)
      setup
      begin
        YUICompressor.compress_js(content)
      rescue => e
        puts "Less Exception: #{e.message}"
      end
    end
  end
end
