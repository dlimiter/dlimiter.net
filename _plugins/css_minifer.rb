module Jekyll
  # Applies YUICompressor compression to css files
  # You must specify an empty YAML front matter
  # at the beginning of the file.
  # LESS css files are compressed by the less converter
  class CssMinifier < Converter
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
      ext =~ /css/i
    end

    def output_ext(ext)
      ".css"
    end

    def convert(content)
      setup
      begin
        YUICompressor.compress_css(content)
      rescue => e
        puts "Less Exception: #{e.message}"
      end
    end
  end
end
