watch: clean
	@gulp & hugo server --watch

server:
	@gulp build && hugo server

init:
	npm install
	bower install

clean:
	rm -rf public

publish:
	gulp build
	hugo

gh-pages: publish
	@rm -rf /tmp/huggle-site
	@mv public /tmp/huggle-site
	@echo "Stashing current branch changes..."
	git add .
	git stash
	@git checkout gh-pages
	@echo ""
	@echo "Clean existing files..."
	@echo ""
	@git rm -rf "*"
	@cp -Rvf /tmp/huggle-site/ ./
	@rm -rf /tmp/huggle-site
	git add .
	@echo ""
	@echo "Done. Use \"git status\" to see what has changed."
