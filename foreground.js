function waitForElm(selector) {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver((mutations) => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}

function fetchFile(url) {
  try {
    fetch(url)
      .then((res) => res.blob())
      .then((file) => {
        let temp_url = URL.createObjectURL(file);
        const aTag = document.createElement("a");
        aTag.href = temp_url;
        aTag.download = "downloaded";
        try {
          document
            .querySelector("._aamu" && "._ae3_" && "._ae47" && "._ae48")
            .appendChild(aTag);
          aTag.click();
          aTag.remove();
        } catch {
          try {
            document.querySelector("._ac0m").appendChild(aTag);
            aTag.click();
            aTag.remove();
          } catch (error) {
            console.log(error);
          }
        }
      });
  } catch (error) {
    alert("Failed to download file!");
  }
}
//Getting Files and Download Commands
var download_in_progress = false;
if (document.getElementById("Tasarruflu Downloader") === null) {
  const button = document.createElement("button");
  button.setAttribute("id", "Tasarruflu Downloader");
  button.innerText = "İNDİR";
  button.addEventListener("click", () => {
    console.log("Pressed To Button");
    if (download_in_progress) {
      console.log("Download already in progress.");
    } else {
      download_in_progress = true;
      try {
        console.log("img search stories");
        var img_url = document
          .querySelector("._aagu" && "._aato")
          .querySelector("._aagv")
          .querySelector("img").src;
        console.log(img_url);
        fetchFile(img_url);
        download_in_progress = false;
      } catch {
        try {
          var video_url = document
            .querySelector("._acam")
            .querySelector("._ab1c")
            .querySelector("video").src;
          console.log(video_url);
          if (video_url.startsWith("blob:")) {
            alert("This post contains an encrypted content!");
            console.log("This post contains an encrypted content!");
            throw new Error("Whoops!");
          } else {
            fetchFile(video_url);
            download_in_progress = false;
          }
        } catch {
          try {
            console.log("checkpoint stories images");
            try {
              var video_url1 = document
                .querySelector("._aa63" && "._ac3u")
                .querySelector("source").src;
              console.log("Video url 1");
              console.log(video_url1);
              if (video_url1.startsWith("blob:")) {
                console.log("This content is encrypted!");
                throw new Error("Whoops!");
              } else {
                fetchFile(video_url1);
                download_in_progress = false;
              }
            } catch {
              var img_url1 = document
                .querySelector("._aa65" && "._aa66")
                .querySelector("img").src;
              console.log(img_url1);
              fetchFile(img_url1);
              download_in_progress = false;
            }
          } catch {
            function findbackbtn(given_try_count) {
              try {
                console.log("First Try");
                var gobackbtn = document
                  .querySelector("._aamm")
                  .querySelector("._aahh");
                console.log(gobackbtn.ariaLabel);
                if (gobackbtn === null && given_try_count < 5) {
                  console.log("Trying again");
                  try_count++;
                  setTimeout(findbackbtn(try_count, true), 1000);
                } else if (gobackbtn === null && given_try_count == 5) {
                  console.log("Buton bulunamadi");
                  return null;
                } else {
                  gobackbtn.click();
                  console.log("Buton bulundu tiklandi.");
                  setTimeout(findbackbtn, 500);
                }
              } catch {
                console.log("Buton Bulunmadi.");
                console.log("Returned null");
                findnextbtn();
                gobackbtn = null;
                //setTimeout(findbackbtn, 500);
              }
            }
            var content_set = new Set();
            var next_item_count = 0;
            var trying_count_for_missing = 0;
            function could_not_find_next_button() {
              console.log("Buton Bulunmadi.");
              console.log("Returned null");
              gonextbtn = null;
              console.log(content_set);
              console.log("Started Downloading");
              console.log(content_set.size);
              console.log(next_item_count);
              var last_tried = false;
              function last_try_for_photo() {
                console.log("Last Time trying");
                last_tried = true;
                var get_image_url3 = document
                  .querySelector("._aa06")
                  .querySelector("._aagu" && "._aamh")
                  .querySelector("._aagv")
                  .querySelector("img").src;
                content_set.add(get_image_url3);
              }
              if (
                content_set.size != next_item_count + 1 &&
                trying_count_for_missing < 3
              ) {
                last_try_for_photo();
                if (
                  content_set.size != next_item_count + 1 &&
                  trying_count_for_missing < 3
                ) {
                  trying_count_for_missing++;
                  next_item_count = 0;
                  findbackbtn(0);
                }
              } else {
                try {
                  if (last_tried == false) {
                    last_try_for_photo();
                  }
                } catch (error) {
                  console.log("Son deneme son foto");
                  console.log(error);
                }
                content_set.forEach((element) => {
                  console.log(element);
                  fetchFile(element);
                });
                download_in_progress = false;
              }
              //setTimeout(findbackbtn, 500);
            }
            var blob_url_set = new Set();
            function findnextbtn() {
              try {
                try {
                  var get_video_url2 = document
                    .querySelector("._acam")
                    .querySelector("._ab1c")
                    .querySelector("video").src;
                  if (get_video_url2.startsWith("blob:")) {
                    console.log("This post contains an encrypted content!");
                    if (blob_url_set.has(get_video_url2) == false) {
                      blob_url_set.add(get_video_url2);
                      next_item_count--;
                    }
                    throw new Error("Whoops!");
                  } else {
                    content_set.add(get_video_url2);
                  }
                } catch {
                  try {
                    var get_image_url2_list = document.querySelectorAll(
                      "._aagu" && "._aamh"
                    );
                    get_image_url2_list.forEach((element) => {
                      content_set.add(
                        element.querySelector("._aagv").querySelector("img").src
                      );
                    });
                  } catch (error) {
                    console.log(error);
                  }
                }
                console.log("First Try for next button");
                try {
                  var gonextbtn = document
                    .querySelector("._aamm")
                    .querySelector("._aahi");
                  console.log(gonextbtn.ariaLabel);
                  gonextbtn.click();
                  console.log("Buton bulundu tiklandi.");
                  next_item_count++;
                  setTimeout(findnextbtn, 500);
                } catch (error) {
                  setTimeout(could_not_find_next_button, 1000);
                }
              } catch {
                setTimeout(could_not_find_next_button, 1000);
              }
            }
            try {
              console.log("Array download checkpoint");
              var try_count = 0;
              findbackbtn(try_count);
            } catch (error) {
              console.log(error);
            }
          }
        }
      }
    }
  });

  try {
    document
      .querySelector("._aamu" && "._ae3_" && "._ae47" && "._ae48")
      .appendChild(button);
  } catch {
    try {
      document.querySelector("._ac0m").appendChild(button);
      console.log("Button added to stories");
    } catch (error) {
      console.log(error);
    }
  }
}
