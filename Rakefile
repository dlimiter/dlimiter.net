task :default => [:server]

task :generate do
    system "jekyll"
end

task :server do
    system "jekyll --server --auto"
end

task :deploy => [:generate] do
    sh "rsync -av --rsh='ssh -p 2683' _site/ dlimiter@dlimiter.net:public_html/"
end

task :deploy_to_test => [:generate] do
    sh "rsync -av --rsh='ssh -p 2683' _site/ dlimiter@dlimiter.net:public_html/test/"
end