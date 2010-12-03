require 'net/ftp'
 
ftp = Net::FTP::new("dlimiter.net")
ftp.login("anonymous", "dlimiter")
ftp.chdir("/pub/ruby")
tgz = ftp.list("ruby-*.tar.gz").sort.last
print "the latest version is ", tgz, "\n"
ftp.getbinaryfile(tgz, tgz)
ftp.close