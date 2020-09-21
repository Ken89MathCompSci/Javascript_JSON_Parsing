var user_profile = {
  "username" : "SammyShark",
  "social_media" : [
    {
      "description" : "twitter",
      "link" : "https://twitter.com/digitalocean"
    },
    {
      "description" : "facebook",
      "link" : "https://www.facebook.com/DigitalOceanCloudHosting"
    },
    {
      "description" : "github",
      "link" : "https://github.com/digitalocean"
    }
  ],

}

alert(user_profile.social_media[0].description);
alert(user_profile.social_media[1].description);
alert(user_profile.social_media[2].description);

for(var i = 0; i < user_profile.social_media.length; i++)
{
    var user_profile_social_media = user_profile.social_media[i];

    var user_description = user_profile_social_media.description;

    alert(user_description);

    var user_link = user_profile_social_media.link;
    
    alert(user_link);
}

