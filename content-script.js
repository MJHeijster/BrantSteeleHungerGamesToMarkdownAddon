function copySelection(event) {
    document.removeEventListener("copy", copySelection, true);
    var convertString = document.getElementById("content").innerHTML;

        var turndownService = new TurndownService()
        turndownService.remove('img');
        convertString = convertString.replaceAll(/(<img[^>]+>(?:<\/img>)?)/g, "").replaceAll(/(<a href[^>]*>[^>]*<\/a>?)/g, "").replaceAll(/(<table[^>]*>)/g, "")
            .replaceAll(/(<font[^>]*>)/g, "").replaceAll(/(<div[^>]*>)/g, "").replaceAll(/(<br \/><br \/>)/g, "<br />").replaceAll(/(<br><br>)/g, "<br>").replace(/(<br ?\/?>)/,"")
            .replaceAll("<td>", "").replaceAll("<tr>", "").replaceAll("</td>", "").replaceAll("</tr>", "").replaceAll("</font>", "").replaceAll("</table>", "").replaceAll("<tbody>", "").replaceAll("</tbody>", "")
            ;
        var markdown = turndownService.turndown(convertString) 
  
        event.preventDefault();
  event.clipboardData.setData('text/plain', markdown);
  }

  document.addEventListener("copy", copySelection, true);
  document.execCommand("copy");