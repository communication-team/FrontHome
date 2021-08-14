import Head from 'next/head'

export default function Head2(props){
    function script1 () {
        var googletag = googletag || {};
        googletag.cmd = googletag.cmd || [];
    }
    function script2() {
        if (typeof window !== "undefined"){
        (function(w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src =
                'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
            })(window, document, 'script', 'dataLayer', 'GTM-NN548QV')
        }}
    function script3() {
        var dataLayer = dataLayer || [];
        function PushDataLayer(e, c, a, l) {
            dataLayer.push({
                'event': e,
                'eventCategory': c,
                'eventAction': a,
                'eventLabel': l
            });
        }
    }
    function script4() {
        if (typeof window !== "undefined"){
        (function(i, s, o, g, r, a, m, n) {
            i.moengage_object = r;
            t = {};
            q = function(f) {
                return function() {
                (i.moengage_q = i.moengage_q || []).push({ f: f, a: arguments });
                };
            };
            (f = [
                'track_event',
                'add_user_attribute',
                'add_first_name',
                'add_last_name',
                'add_email',
                'add_mobile',
                'add_user_name',
                'add_gender',
                'add_birthday',
                'destroy_session',
                'add_unique_user_id',
                'moe_events',
                'call_web_push',
                'track',
                'location_type_attribute',
            ]),
                (h = { onsite: ['getData'] });
            for (k in f) {
                t[f[k]] = q(f[k]);
            }
            a = s.createElement(o);
            m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m);
            i.moe =
                i.moe ||
                function() {
                n = arguments[0];
                return t;
                };
            a.onload = function() {
                if (n) {
                i[r] = moe(n);
                }
            };
            })(
            window,
            document,
            'script',
            'https://cdn.moengage.com/webpush/moe_webSdk.min.latest.js',
            'Moengage'
            );
        
            Moengage = moe({
          app_id: '5NEC68I6GO0KKYDKXUDQ6T3A',
          debug_logs: 0,
          swPath: '/service-worker.js',
        });
    }}
    function script5() {
        if(typeof window !== "undefined"){
        !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '1669715986469750');
    fbq('track', 'PageView');
    }}
    function script6() {
        if (typeof(window)!='undefined'){
        window.dataLayer = window.dataLayer || []; 
  window.dataLayer.push({ 'event': 'Pageview', 'pagePath': '/', 'pageTitle': 'سيارات للبيع في السعودية | موقع سيارة' })}
    }
    return(
    <Head>
        <base href="/" />
        <title>Sayartak</title>
        <meta charSet="utf-8" />
        <link rel="icon" type="image/ico" href="/favicon.ico?v1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="apple-itunes-app-custom" content="app-id=1066260672" />
        <meta name="google-play-app" content="app-id=app.com.syarah" />
        <meta name="msapplication-TileImage" content="https://syarah.com/images/favicon.ico?v=1.2" />
        <meta name="description" content="اشتري سيارتك اونلاين بسهولة و من أي مكان في السعودية. تصفح العديد من السيارات الجديدة والمستعملة. جميع سياراتنا المستعملة مفحوصة ومضمونة، وكمان نوصلها لين عندك" />
        <link rel="manifest" href="manifest.json"></link>
        <link href="https://fonts.googleapis.com/css?family=Cairo:400,700,900" rel="stylessheet" />
        <script type="text/jsx" async="" src="https://www.googletagservices.com/tag/js/gpt.js"> </script>
            {script1()}
        <script></script>
        <script>
            {script2()}
        </script>
        <script>
            {script3()}    
        </script>
        <script>
            {/* {script4()} */} 
        </script>
        <script>
        {script5()}
        </script>
        <noscript><img height="1" width="1" styles="display:none"
        src="https://www.facebook.com/tr?id=1669715986469750&ev=PageView&noscript=1"
        /></noscript>
        <link rel="stylessheet" href="static/css/client.791f187b.css"/>
        <script>{script6()}</script>
        <script src="/static/js/client.ab5fdfe5.js?v=1.2" defer></script> 
    </Head>
        )
        }