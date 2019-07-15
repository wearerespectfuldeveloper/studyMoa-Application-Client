<template>
    <div id="chat-board" style="margin: 35px;">
        <form>
        <table class="table table-hover">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
            </tr>
            <tr>
                <th scope="row">4</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
            </tr>
            <tr>
                <th scope="row">5</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
            </tr>
            <tr>
                <th scope="row">6</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
            </tr>
            <tr>
                <th scope="row">7</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
            </tr>
            <tr>
                <th scope="row">8</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
            </tr>
            <tr>
                <th scope="row">9</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
            </tr>
            <tr>
                <th scope="row">10</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
            </tr>
            </tbody>
        </table>
            <div>
                <a href='#' style="float: right;" class="btn btn-success">글쓰기</a>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "chat-board"
    }
</script>

<style scoped>

</style>