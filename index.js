module.exports = {
    blocks: {
        tag1:{
            process: function (block) {

                var html = "<details>";
                html += "<summary>Test 1</summary>";
                html += block.body;
                html += "</details>";

                return html;
            }
        }
    }
};