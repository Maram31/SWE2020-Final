//////////////////////////////////
/////////////Premium selectors //ALL in Xpath
exports.GetPremiumButtonID="com.spotify.music:id/offer_cta";
exports.GetPremiumButton="/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/androidx.recyclerview.widget.RecyclerView/android.widget.LinearLayout/android.widget.LinearLayout/android.view.ViewGroup/android.widget.Button";
exports.PremiumPageTitle="/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/androidx.recyclerview.widget.RecyclerView/android.widget.LinearLayout/android.widget.TextView";
exports.PremiumPageTitleID="com.spotify.music:id/premium_page_header";
exports.GetPremiumCloseID="com.spotify.music:id/btn_close";
exports.GetPremiumClose="//android.widget.ImageView[@content-desc='Close']";
exports.GetPremiumIndividualButton="/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout[1]/android.widget.LinearLayout/android.view.ViewGroup/android.widget.Button";
exports.GetPremiumFamilyButton="/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.view.ViewGroup[2]/android.widget.Button";
exports.GetPremiumPriceText="/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.RelativeLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[3]/android.view.View/android.view.View[4]";

//////////////////////////
//AboutPage //ALL in Xpath
exports.AboutButton="/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout[6]/android.widget.LinearLayout/android.widget.LinearLayout";
//////////////////////////
//Audio settings page //ALL in Xpath and Id
exports.SettingLabelID="com.spotify.music:id/glue_toolbar_title";
exports.MusicQualityTypeButtonClass="android.widget.Spinner";
exports.MusicQualityTypeTextButton="/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[3]/android.widget.ListView/android.widget.FrameLayout[6]/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.Spinner/android.widget.TextView";


exports.AutomaticQualityButton="/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ListView/android.widget.CheckedTextView[1]";
exports.LowQualityButton="/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ListView/android.widget.CheckedTextView[2]";
exports.NormalQualityButton="/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ListView/android.widget.CheckedTextView[3]";
exports.HighQualityButton="/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ListView/android.widget.CheckedTextView[4]";
exports.VeryHighQualityButton="/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ListView/android.widget.CheckedTextView[5]";

//////////////////////////
//HomePage all by xpath excepts those that written at the end of the name ID
exports.LibraryIconID="com.spotify.music:id/your_library_tab"
exports.SpotifyLogoHomeScreentitleId="com.spotify.music:id/title";
exports.HomeButtonID="";
exports.PremiumButtonID="com.spotify.music:id/premium_tab";
exports.SpotifyLogoID=""
exports.SettingButton="//android.widget.ImageButton[@content-desc='Settings']";
exports.SettingButtonID="abaf6fd7-47ba-4ffb-aa56-73ad2bcb7101";
exports.LogOutInSettingsO2ButtonID="";
exports.SearchButtonID="com.spotify.music:id/search_tab";

exports.SearchFieldID="com.spotify.music:id/find_search_field";
exports.PlayButtonXpath="/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout[1]/android.view.ViewGroup/android.widget.FrameLayout/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout[1]/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.Button"
exports.MuiscBarID="com.spotify.music:id/track_title"
exports.LikeSongButtonID="com.spotify.music:id/heart_button"
exports.DropDownMenu="com.spotify.music:id/context_menu_button"
exports.LikeSongOption="android:id/text1"
exports.HideSongOptionXpath="//*[contains(@text, 'Hide this song')]"
exports.AddToPlaylistOptionXpath="//*[contains(@text, 'Add to Playlist')]"
exports.HideSongButton="com.spotify.music:id/ban_button"

exports.PlaylistNameXpath="//*[contains(@text, 'Heba')]"

exports.NextSongButton="com.spotify.music:id/next_button"
exports.PrevSongButton="com.spotify.music:id/previous_button"
exports.PlaySongButton="com.spotify.music:id/play_pause_button"


exports.ToastID="com.spotify.music:id/snackbar_text"

//Create playlist
exports.CreatePlaylistID=""
exports.CreatePlaylistTextFieldID=""
exports.CreatePlaylistSetID=""
exports.CreatePlaylistCancelID=""
exports.CreatedPlaylistNameID=""

//Login Selectors
exports.LogInButtonID="//*[contains(@text, 'LOG IN')]"
exports.EmailLogInID="com.spotify.music:id/username_text"
exports.PasswordLogInID="com.spotify.music:id/password_text"

//Liked Songs Page
exports.LikeSongIconXpath='/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.view.ViewGroup/android.widget.FrameLayout/androidx.viewpager.widget.ViewPager/android.widget.FrameLayout/android.widget.FrameLayout[2]/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView/android.widget.LinearLayout[2]/android.widget.FrameLayout/android.widget.LinearLayout'
exports.PlayButtonInLikeSongsID='com.spotify.music:id/button'
exports.StopLikingSongButtonXpath='(//android.widget.ImageButton[@content-desc="Stop liking this song"])[1]'
exports.MoreOptionsInLikeSongsXpath='(//android.widget.ImageButton[@content-desc="Show context menu"])[1]'
exports.UnlikeOptionXpath='/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.ScrollView/android.widget.LinearLayout/android.widget.TextView[1]'
exports.AddToPlaylist2OptionXpath='/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.ScrollView/android.widget.LinearLayout/android.widget.TextView[2]'

exports.PlayAlbumXpath='/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.widget.LinearLayout[1]/android.widget.LinearLayout/android.widget.Button'

//Artist Page Selectors all in id except those ends with Xpath name
exports.Searchfield="com.spotify.music:id/find_search_field";
exports.Searchfieldtext="com.spotify.music:id/query";
exports.SearchfirstResult="com.spotify.music:id/labels";
exports.FollowandUnfollowbutton="com.spotify.music:id/actionbar_item_follow";
exports.ArtistInLibraryButtonXpath="/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.view.ViewGroup/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.HorizontalScrollView/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.FrameLayout[2]";
exports.AddArtistButton="com.spotify.music:id/empty_view_button";
exports.FirstArtistInLibrarytextXpath="/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.view.ViewGroup/android.widget.FrameLayout/androidx.viewpager.widget.ViewPager/android.widget.FrameLayout/android.widget.FrameLayout[2]/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView/android.widget.LinearLayout[1]/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.TextView";
exports.FirstArtistInLibraryXpath="/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.view.ViewGroup/android.widget.FrameLayout/androidx.viewpager.widget.ViewPager/android.widget.FrameLayout/android.widget.FrameLayout[2]/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView/android.widget.LinearLayout[1]/android.widget.FrameLayout/android.widget.LinearLayout";
exports.ArtistDropDownMenu="com.spotify.music:id/glue_overflow";
exports.FollowandUnfollowInDropdownMenuXpath="/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.ScrollView/android.widget.LinearLayout/android.widget.TextView[1]";
exports.FirstResultFromAddArtistXpath="hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[1]";
exports.DoneButtonInAddArtist="com.spotify.music:id/done_button";