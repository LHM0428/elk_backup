
/**
 * Test entry file
 *
 * This is programatically created and updated, do not modify
 *
 * context: {"env":"production","urlBasePath":"","sourceMaps":false,"kbnVersion":"5.1.2","buildNum":14588}
 * includes code from:
 *  - area3d_vis@kibana-5.1.2
 *  - console@kibana
 *  - elasticsearch@kibana
 *  - elasticsearch_status@kibana
 *  - kbn_doc_views@kibana
 *  - kbn_vislib_vis_types@kibana
 *  - kibana@kibana
 *  - markdown_vis@kibana
 *  - metric_vis@kibana
 *  - network_vis@kibana
 *  - spy_modes@kibana
 *  - status_page@kibana
 *  - table_vis@kibana
 *  - tagcloud@kibana
 *  - timelion@kibana
 *
 */

require('ui/chrome');
require('plugins/timelion/app_with_autoload');
require('plugins/timelion/lib/panel_registry');
require('plugins/timelion/panels/timechart/timechart');
require('ui/chrome').bootstrap(/* xoxo */);

