function fetchFile(url) {
  try {
    fetch(url)
      .then((res) => res.blob())
      .then((file) => {
        let temp_url = URL.createObjectURL(file);
        const aTag = document.createElement("a");
        aTag.href = temp_url;
        aTag.download = "downloaded";
        document
          .querySelector("._aamu" && "._ae3_" && "._ae47" && "._ae48")
          .appendChild(aTag);
        aTag.click();
        aTag.remove();
      });
  } catch (error) {
    alert("Failed to download file!");
  }
}

if (document.getElementById("Tasarruflu Downloader") === null) {
  const button = document.createElement("button");
  button.setAttribute("id", "Tasarruflu Downloader");
  button.innerText = "İNDİR";
  button.addEventListener("click", () => {
    console.log("Pressed To Button");
    try {
      var img_url = document
        .querySelector("._aagu" && "._aato")
        .querySelector("._aagv")
        .querySelector("img").src;
      console.log(img_url);
      fetchFile(img_url);
    } catch {
      try {
        var video_url = document
          .querySelector("._acam")
          .querySelector("._ab1c")
          .querySelector("video").src;
        console.log(video_url);
        fetchFile(video_url);

        //var img_url = document
        //  .querySelectorAll("._aagu" && "._aamh")
        //  .querySelector("._aagv")
        //  .querySelector("img").src;
        //console.log(img_url);
      } catch {
        try {
          var img_url_list = document.querySelectorAll("._aagu" && "._aamh");
          console.log(img_url_list);
          var all_images = [];
          for (var i = 0; i < img_url_list.length; i++) {
            all_images.push(
              img_url_list[i].querySelector("._aagv").querySelector("img").src
            );
          }
          console.log(all_images);
          for (var j = 0; j < all_images.length; j++) {
            fetchFile(all_images[j]);
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
  });
  try {
    document
      .querySelector("._aamu" && "._ae3_" && "._ae47" && "._ae48")
      .appendChild(button);
    //document.querySelector("_aamu" && "_ae3_").appendChild(button);
  } catch (error) {
    console.log(error);
  }
}
/* Clicked event
document.body.addEventListener("click", () => {
  Event.call(onActivated);
  
  if (document.getElementById("Tasarruflu Downloader") == null) {
    console.log("Buton zaten var");
  } else if (document.getElementById("Tasarruflu Downloader") !== null) {
    const button = document.createElement("button");
    button.setAttribute("id", "Tasarruflu Downloader");
    button.innerText = "İNDİR";
    button.addEventListener("click", () => {
      console.log("Pressed To Button");
      try {
        var img_url = document
          .querySelector("._aagu" && "._aato")
          .querySelector("._aagv")
          .querySelector("img").src;
        console.log(img_url);
        fetchFile(img_url);
      } catch {
        try {
          var video_url = document
            .querySelector("._acam")
            .querySelector("._ab1c")
            .querySelector("video").src;
          console.log(video_url);
          fetchFile(video_url);
        } catch {
          try {
            var img_url_list = document.querySelectorAll("._aagu" && "._aamh");
            console.log(img_url_list);
            var all_images = [];
            for (var i = 0; i < img_url_list.length; i++) {
              all_images.push(
                img_url_list[i].querySelector("._aagv").querySelector("img").src
              );
            }
            console.log(all_images);
            for (var j = 0; j < all_images.length; j++) {
              fetchFile(all_images[j]);
            }
          } catch (error) {
            console.log(error);
          }
        }
      }
    });
    try {
      document
        .querySelector("._aamu" && "._ae3_" && "._ae47" && "._ae48")
        .appendChild(button);
      //document.querySelector("_aamu" && "_ae3_").appendChild(button);
    } catch (error) {
      console.log(error);
    }
  }
});*/
