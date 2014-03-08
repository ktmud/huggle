watch: clean
	@gulp live & hugo server --watch

init:
	npm install
	bower install
	ln -s themes/default ./template

clean:
	rm -rf public

build:
	gulp build
	hugo

server:
	@gulp build && hugo server

gh-pages: build
	@rm -rf ./_gh_pages
	@mv public ./_gh_pages
	@echo "Stashing current branch changes..."
	git add .
	git stash
	@git checkout gh-pages
	@echo ""
	@echo "Clean existing files..."
	@echo ""
	@git rm -rf "*"
	@mv -Rvf `ls -A ./_gh_pages/*` ./
	@rm -rf ./_gh_pages
	git add .
	@echo ""
	@echo "Done. Use \"git diff HEAD\" to see what has changed."
	@echo ""
