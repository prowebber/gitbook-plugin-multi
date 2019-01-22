module.exports = {
    blocks: {
        tag1:{
            process: function (block) {
                // Format the HTML
                var formatted_html = this.renderBlock('markdown', block.body)

                var html = "<details>";
                html += "<summary>Test 1</summary>";
                html += formatted_html;
                html += "</details>";

                return html;
            }
        }
    }
};