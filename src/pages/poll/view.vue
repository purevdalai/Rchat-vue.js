<template>
    <div class="card mt-3">
        <div class="card-header">
            <span class="float-left mt-1">
                Санал асуулгууд
            </span>
            <div class="float-right">
                <button
                    @click="createPoll" 
                    class="btn btn-success">
                    <i class="fas fa-plus"></i>
                    Санал асуулга үүсгэх
                </button>
            </div>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">AA</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'PollPage',
    
    methods: {
        createPoll: function() {
            this.$router.push({
                name: 'PollCreate'
            });
        }
    }
}
</script>

<style>
.btn {
    font-size: 13px;
}
</style>
