include .env.makefile

branch:=$(shell git rev-parse --abbrev-ref HEAD)

init-proto:
	git submodule add git@github.com:en-gine/heiwadai_proto.git v1

buf: # protoファイルのbufコンパイル
	git submodule update --remote
	npx buf generate

buf-update: # protoの更新とbufコンパイル
	@make buf

pre-flight: #　pre-flightリクエストのテスト
	curl -X OPTIONS "http://localhost:3000" \
     -H "Access-Control-Request-Method: POST" \
     -H "Access-Control-Request-Headers: X-Custom-Header" \
     -H "Origin: http://localhost:8000" \
     -i


build:
	docker build -t ${AWS_ID}.dkr.ecr.ap-northeast-1.amazonaws.com/heiwadai-admin:latest -f ./Dockerfile .

push:
	docker push ${AWS_ID}.dkr.ecr.ap-northeast-1.amazonaws.com/heiwadai-admin:latest

login:
	aws ecr get-login-password --region ap-northeast-1 | docker login --username AWS --password-stdin https://${AWS_ID}.dkr.ecr.ap-northeast-1.amazonaws.com
