module Jekyll
  # Compiled LESS CSS into CSS. You must specify an empty YAML front matter
  # at the beginning of the file.
  # .less -> .css
  class LessConverter < Converter
    safe true
    priority :low
    pygments_prefix "\n"
    pygments_suffix "\n"

    def setup
      return if @setup
      require 'less'
      require 'yuicompressor'
      @setup = true
    rescue LoadError
      STDERR.puts 'You are missing a library required for less or yuicompressor. Please run:'
      STDERR.puts '  $ [sudo] gem install less'
      STDERR.puts '  or'
      STDERR.puts '  $ [sudo] gem install yuicompressor'      
      raise FatalException.new("Missing dependency: less or yuicompressor")
    end

    def matches(ext)
      ext =~ /less/i
    end

    def output_ext(ext)
      ".css"
    end

    def convert(content)
      setup
      begin
        YUICompressor.compress_css(Less::Engine.new(content).to_css)
      rescue => e
        puts "Less Exception: #{e.message}"
      end
    end
  end
end
