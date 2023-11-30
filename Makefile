init-proto:
	git submodule add git@github.com:en-gine/heiwadai_proto.git v1

buf: # protoファイルのbufコンパイル
	npx buf generate

buf-update: # protoの更新とbufコンパイル
	git submodule update --remote
	@make buf
