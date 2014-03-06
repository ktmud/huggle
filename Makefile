watch: clean
	@gulp & hugo server --watch

server:
	@gulp build && hugo server

init:
	npm install

clean:
	rm -rf public

publish:
	git branch -D gh_pages
	git checkout -b gh_pages
	gulp build
	hugo
	mv public /tmp/huggle-pages
	git rm * --cached
	echo "" > .gitignore
	mv /tmp/huggle-pages/* ./
