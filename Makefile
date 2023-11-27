init-proto:
	git submodule add git@github.com:en-gine/heiwadai_proto.git v1
	
update-proto:
	git submodule update --remote

buf:
	npx buf generate