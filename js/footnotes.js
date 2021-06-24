function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}


function convert_text_to_footnotes() {
  var original_html = document.getElementById("original_html").value.replaceAll('</p>', '</p>\r\n')

  var footnote_num =0;


  var link_to_footnote_template ='<a name="back0" rel="nofollow" id="back0"></a><a href="#note0" rel="nofollow"><sup>number</sup></a>'
  var link_back_template ='<li><sup><a href="#back0" rel="nofollow">[^]</a></sup> <a name="note0" rel="nofollow" id="note0"></a>FOOTNOTE</li>\r\n'

  var all_footnotes_html='<ol>'

  var html_with_footnotes = original_html.replace(/[\[\(]FOOTNOTE[\:\s]([\s\S]*?)[\]\)]/g, (match, $1) => {
    footnote_num++
    var id1=uuidv4()
    var id2=uuidv4()

    var link_back_html = link_back_template.replaceAll('back0', id1).replaceAll('note0', id2).replaceAll('FOOTNOTE', $1.trim())
    all_footnotes_html = all_footnotes_html.concat(link_back_html)

    return link_to_footnote_template.replaceAll('number', footnote_num).replaceAll('back0', id1).replaceAll('note0', id2)
  });

all_footnotes_html = all_footnotes_html.concat("</ol>")

document.getElementById("updated_html").value = html_with_footnotes.concat(all_footnotes_html)

}
