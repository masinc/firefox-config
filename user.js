// ssb
user_pref("browser.ssb.enabled", true);

// sessionstore
user_pref("browser.sessionstore.interval", 15 * 60 * 1000);

// fingerprint
user_pref("privacy.resistFingerprinting", true);

// userchrome
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// notify
user_pref("dom.webnotifications.enabled", false);

// platform
user_pref(
  "general.useragent.override",
  "Mozilla/5.0 (Windows NT 6.1; rv:38.0) Gecko/20100101 Firefox/38.0"
);
user_pref("general.platform.override", "Win32");

// buttery
user_pref("dom.battery.enabled", false);

// referer
user_pref("network.http.sendRefererHeader", 1);
user_pref("network.http.referer.XOriginPolicy", 1);
user_pref("network.http.referer.spoofSource", true);
user_pref("network.http.referer.trimmingPolicy", 2);

// rendering delay
user_pref("nglayout.initialpaint.delay", 0);

// font
user_pref("font.name.monospace.ja", "BIZ UDゴシック");
user_pref("font.name.sans-serif.ja", "BIZ UDPゴシック");
user_pref("font.name.serif.ja", "BIZ UDP明朝");

user_pref("layers.acceleration.disabled", false);
user_pref("layers.acceleration.force-enabled", true);
user_pref("gfx.direct2d.disabled", false);
user_pref("gfx.direct2d.force-enabled", true);

user_pref("gfx.font_rendering.cleartype_params.rendering_mode", 5);
user_pref("gfx.font_rendering.cleartype.always_use_for_content", true);
user_pref("gfx.font_rendering.cleartype_params.cleartype_level", 100);
user_pref("gfx.font_rendering.cleartype_params.gamma", 3000);
user_pref("gfx.font_rendering.cleartype_params.enhanced_contrast", 200);
user_pref("gfx.font_rendering.cleartype_params.pixel_structure", 1);
user_pref("gfx.font_rendering.cleartype_params.rendering_mode", 5);
user_pref("gfx.font_rendering.directwrite.enabled", true);
user_pref("gfx.use_text_smoothing_setting", true);

// mouse
user_pref("mousewheel.default.delta_multiplier_y", 400);

// cache
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.memory.enable", true);
user_pref("browser.cache.memory.capacity", -1);
