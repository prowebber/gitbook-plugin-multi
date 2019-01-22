module.exports = {
    blocks: {
        tag1:{
            process: function (block) {
                // Format the HTML
                var formatted_html = book.renderBlock('markdown', block.body)
                    .then(function(data){
                        return data
                    });

                var html = "<details>";
                html += "<summary>Test 1</summary>";
                html += formatted_html;
                html += "</details>";

                return html;
            }
        }
    }
};