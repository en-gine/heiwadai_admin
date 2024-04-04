init-proto:
	git submodule add git@github.com:en-gine/heiwadai_proto.git v1

buf: # protoファイルのbufコンパイル
	git submodule update --remote
	npx buf generate

buf-update: # protoの更新とbufコンパイル
	@make buf

pre:
	curl -X OPTIONS "http://localhost:3000" \
     -H "Access-Control-Request-Method: POST" \
     -H "Access-Control-Request-Headers: X-Custom-Header" \
     -H "Origin: http://localhost:8000" \
     -i