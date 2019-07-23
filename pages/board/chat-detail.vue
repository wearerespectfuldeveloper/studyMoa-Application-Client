<template>
    <div class="container" style="margin: 35px;">
        <form>
            <div class="col-lg-12">
                <div class="form-group row m-b-15">
                    <label class="col-form-label col-md-2">작성자</label>
                    <div class="col-md-4">
                        {{ post.writer }}
                    </div>
                </div>
                <div class="form-group row m-b-15">
                    <label class="col-form-label col-md-2">제목</label>
                    <div class="col-md-4">
                        {{post.title}}
                    </div>
                </div>
                <div class="form-group row m-b-15">
                    <label class="col-form-label col-md-2">내용</label>
                    <div class="col-md-4 ">
                        {{post.content}}
                    </div>
                </div>
                <div class="form-group">
                    <nuxt-link :to="{path:'/board/chat-board'}" class="btn btn-primary">목록</nuxt-link>
                    <button type="button" class="btn btn-primary">수정</button>
                </div>
            </div>


        </form>

            <div class="col-md-6">
                <div class="card card-info">
                    <div class="card-block">
                        <form class="form-inline">
                            <div style="margin: 22px;">
                                <h5>코멘트 남기기</h5>
                            <textarea class="pb-cmnt-textarea" style="width: 430px;"></textarea>
                            <button class="btn-sm btn-info float-xs-right" type="button">등록</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    import BoardService from '@/service/board.service';

    export default {
        name: "chat-detail",
        data(){
            return{
                post:{},
                service: new BoardService(),
            }
        },
        mounted(){
            this.init();
        },
        methods:{
            init(){
                const id = this.$route.query.id;
                this.post = this.service.get(id);
                console.log(this.post);
            }
        }
    }
</script>

<style scoped>
    pb-cmnt-container {
        font-family: Lato;
        margin-top: 100px;
    }

    .pb-cmnt-textarea {
        resize: none;
        padding: 20px;
        height: 130px;
        width: 100%;
        border: 1px solid #F2F2F2;
    }
</style>