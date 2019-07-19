<template>
    <div class="container" style="margin: 35px;">
        <form>

            <div class="form-group"> <!-- Name field -->
                <label class="control-label">작성자</label>
                <span>김태형</span>
            </div>

            <div class="form-group"> <!-- Subject field -->
                <label class="control-label " for="subject">제목</label>
                <input class="form-control" id="subject" name="subject" type="text"/>
            </div>

            <div class="form-group"> <!-- Message field -->
                <label class="control-label " for="message">내용</label>
                <textarea class="form-control" cols="40" id="message" name="message" rows="10"></textarea>
            </div>

            <div class="form-group">
                <button class="btn btn-primary " name="submit" type="button">글쓰기</button>
                <button class="btn btn-primary " name="submit" type="button">목록</button>
            </div>

        </form>
    </div>
</template>

<script>
    export default {
        name: "chat-add"
    }
</script>

<style scoped>

</style>