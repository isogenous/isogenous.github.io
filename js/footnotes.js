function convert_text_to_footnotes() {
  var original_html = document.getElementById("original_html").value.replaceAll('</p>', '</p>\r\n')

  var footnote_num =0;

  var link_to_footnote_template ='<a name="back0" rel="nofollow" id="back0"></a><a href="#note0" rel="nofollow"><sup>0</sup></a>'
  var link_back_template ='<li><sup><a href="#back0" rel="nofollow">[^]</a></sup><a name="note0" rel="nofollow" id="note0"></a>FOOTNOTE</li>'

  var all_footnotes_html='<ol>'

  var html_with_footnotes = original_html.replace(/[\[\(]FOOTNOTE[\:\s](.*)[\]\)]/g, (match, $1) => {
    footnote_num++

    var link_back_html = link_back_template.replaceAll('0', footnote_num).replaceAll('FOOTNOTE', $1).trim()
    all_footnotes_html = all_footnotes_html.concat(link_back_html)

    return link_to_footnote_template.replaceAll('0', footnote_num)
  });

all_footnotes_html = all_footnotes_html.concat("</ol>")

document.getElementById("updated_html").value = html_with_footnotes.concat(all_footnotes_html)

}
