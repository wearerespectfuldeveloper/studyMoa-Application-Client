<template>
    <div id="chat-board" style="margin: 35px;">
        <div>
            <h2>잡담 게시판</h2>
        <div class="form-group">
            <select class="form-control" style="width: 100px; float: right; margin-bottom: 10px;" >
                <option :value="null">최신순</option>
                <option :value="1">추천순</option>
                <option :value="2">조회수순</option>
            </select>
        </div>
        </div>
        <form>
        <table class="table table-hover">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">작성자</th>
                <th scope="col">제목</th>
                <th scope="col">작성일</th>
                <th scope="col">조회수</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(post, index) in list">
                <th scope="row">{{index+1}}</th>
                <td>{{ post.writer }}</td>
                <td>
                   <nuxt-link :to="{path: '/board/chat-detail', query:{id: post.id}}"> {{ post.title }}</nuxt-link>
                </td>
                <td>{{ post.created_dt }}</td>
                <td>{{ post.volume }}</td>
            </tr>
            </tbody>
        </table>
            <div>
                <nuxt-link :to="{path:'/board/chat-add'}" style="float: right;" class="btn btn-success">글쓰기</nuxt-link>
            </div>
        </form>
    </div>
</template>

<script>
    import BoardService from '@/service/board.service';

    export default {
        name: "chat-board",
        data(){
            return{
                list:[],
                service: new BoardService()
            }

        },
        mounted() {
            this.init();
        },
        methods:{
            init(){
               this.list = this.service.getList().data;
            }
        }
    }
</script>

<style scoped>

</style>