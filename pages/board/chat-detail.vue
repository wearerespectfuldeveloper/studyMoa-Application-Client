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
                        <input type="text" class="form-control m-b-5" v-model="post.title" :readonly="isDetail"/>
                    </div>
                </div>
                <div class="form-group row m-b-15">
                    <label class="col-form-label col-md-2">내용</label>
                    <div class="col-md-4">
                        <textarea style="resize: none;" class="form-control m-b-5" v-model="post.content" :readonly="isDetail"/>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <nuxt-link :to="{path:'/board/chat-board'}"><button class="btn btn-primary" type="button">목록</button></nuxt-link>
                <button type="button" class="btn btn-primary">수정</button>
            </div>

        </form>
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
                isDetail: false
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

</style>