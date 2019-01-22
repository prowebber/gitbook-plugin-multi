module.exports = {
    blocks: {
        collapse:{
            process: function (block) {
                return "Hello "+block.body+", How are you?";
            }
        }
    }
};