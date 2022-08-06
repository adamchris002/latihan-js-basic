class View {
    static help() {
        console.log("node index.js help");
        console.log("node index.js wines");
        console.log("node index.js add <wine_name>");
        console.log("node index.js sell <wine_id>");
        console.log("node index.js rename <wine_id> <wine_name>");
        console.log("node index.js findById <wine_id>");
    }

    static show(msg) {
        console.log(msg);
    }
    
    static message(msg) {
        console.log(msg);
    }
}


module.exports = View;