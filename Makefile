watch: clean
	@hugo server -ws .

init:
	git submodule init
	git submodule sync
	git submodule update

clean:
	rm -rf public

build:
	git submodule update
	hugo

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
	@cp -Rvf ./_gh_pages/ ./
	@rm -rf ./_gh_pages
	git add .
	@echo ""
	@echo "Done. Use \"git diff HEAD\" to see what has changed."
	@echo ""

deploy: gh-pages
	git commit -am 'update'
	git push
	git checkout -
