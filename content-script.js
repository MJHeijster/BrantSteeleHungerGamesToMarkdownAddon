function copySelection(event) {
    document.removeEventListener("copy", copySelection, true);
    var convertString = document.getElementById("content").innerHTML;

        var turndownService = new TurndownService()
        turndownService.remove('img');
        convertString = convertString.replaceAll(/(<img[^>]+>(?:<\/img>)?)/g, "").replaceAll(/(<a href[^>]*>[^>]*<\/a>?)/g, "").replaceAll(/(<table[^>]*>)/g, "")
            .replaceAll(/(<font[^>]*>)/g, "").replaceAll(/(<div[^>]*>)/g, "").replaceAll(/(<br \/><br \/>)/g, "<br />").replaceAll(/(<br><br>)/g, "<br>").replace(/(<br \/>)/,"")
            .replaceAll("<td>", "").replaceAll("<tr>", "").replaceAll("</td>", "").replaceAll("</tr>", "").replaceAll("</font>", "").replaceAll("</table>", "")
            ;
        var markdown = turndownService.turndown(convertString) 
        var copyText = markdown.replaceAll(/(?:\r\n|\r|\n)/g, "\r\n").replaceAll(/(?:\r\n|\r|\n)/g, "\r\n");
  
        event.preventDefault();
  event.clipboardData.setData('text/plain', copyText);
  }

  document.addEventListener("copy", copySelection, true);
  document.execCommand("copy");