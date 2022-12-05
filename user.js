// user chrome

user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

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
user_pref('browser.cache.disk.enable', false);
user_pref('browser.cache.memory.enable', true);
user_pref('browser.cache.memory.capacity', -1);