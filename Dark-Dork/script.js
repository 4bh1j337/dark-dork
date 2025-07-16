function find(type) {
    const input = document.getElementById('target');
    const site = input.value.trim();

    if (!site) {
        alert("⚠️ Please enter a valid domain.\nExample: www.example.com");
        input.focus();
        return;
    }

    const base = `https://www.google.com/search?q=${encodeURIComponent('site:' + site)} `;

    const dorks = {
        1: 'inurl:login OR inurl:signin OR intitle:login OR intitle:signin OR intext:"Admin Login" OR inurl:"/admin/login"',
        2: 'inurl:"error" OR intitle:"exception" OR intitle:"failure" OR "SQL syntax" OR "database error" OR "undefined index" OR "stack trace"',
        3: 'inurl:id= OR inurl:pid= OR inurl:cat= OR inurl:action= OR inurl:sid= OR inurl:"?id=" OR inurl:".php?id="',
        4: 'inurl:email= OR inurl:phone= OR inurl:password= OR inurl:secret=',
        5: 'inurl:url= OR inurl:return= OR inurl:next= OR inurl:redirect= OR inurl:redir= OR inurl:ret= OR inurl:http',
        6: 'inurl:include OR inurl:file= OR inurl:folder= OR inurl:locate= OR inurl:doc= OR inurl:".php?file="',
        7: 'inurl:q= OR inurl:s= OR inurl:search= OR inurl:query= OR inurl:lang= OR inurl:keyword=',
        8: '"choose file" OR "upload" OR "select file to upload"',
        9: 'ext:txt OR ext:pdf OR ext:xls OR ext:xlsx OR ext:docx intext:"confidential" OR "internal use only"',
        10: 'inurl:api OR inurl:swagger OR site:*/*/v1 OR site:*/*/v2 OR inurl:apidocs',
        11: 'ext:ppk OR ext:pem OR ext:key intext:"BEGIN RSA PRIVATE KEY"',
        12: 'intitle:"index of" OR "parent directory" intext:"index of"',
        13: 'inurl:.env OR inurl:.git OR inurl:backup OR inurl:config OR inurl:admin',
        14: '"powered by WordPress" OR inurl:"/wp-login.php" OR inurl:"/xmlrpc.php"',
        15: 'intitle:"index of" "/db_backups/" OR "config/sql" OR "admin/backup"',
        16: 'inurl:url= OR inurl:http OR inurl:dest= OR inurl:data= OR inurl:domain='
    };

    const query = dorks[type];

    if (!query) {
        alert("Unknown search type.");
        return;
    }

    const finalURL = base + encodeURIComponent(query);
    window.open(finalURL, '_blank');
}