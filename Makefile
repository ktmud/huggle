watch: clean
	@gulp & hugo server --watch

server:
	@gulp build && hugo server

init:
	npm install

clean:
	rm -rf public
