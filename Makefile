watch:
	@gulp & 2>1
	@hugo server --watch

server:
	@gulp build
	@hugo

init:
	npm install
