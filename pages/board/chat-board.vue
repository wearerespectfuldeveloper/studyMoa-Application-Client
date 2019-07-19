<template>
    <div id="chat-board" style="margin: 35px;">
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
            <tr v-for="post in list">
                <th scope="row">1</th>
                <td>{{ post.writer }}</td>
                <td>{{ post.title }}</td>
                <td>{{ post.created_dt }}</td>
                <td>{{ post.volume }}</td>
            </tr>
            </tbody>
        </table>
            <div>
                <nuxt-link to="/board/chat-add" style="float: right;" class="btn btn-success">글쓰기</nuxt-link>
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