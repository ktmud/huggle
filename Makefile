watch: clean
	@gulp & hugo server --watch

server:
	@gulp build && hugo server

init:
	npm install

clean:
	rm -rf public

publish:
	gulp build
	hugo

gh-pages: publish
	mv public /tmp/huggle-pages
	rm -r ./*
	mv /tmp/huggle-pages/* ./
