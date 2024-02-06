export const torrentConfig = {
    MAX_CONNECTIONS_PER_TORRENT: parseInt(process.env.MAX_SINGLE_TORRENT_CONNECTIONS || "20", 10),
    TIMEOUT: parseInt(process.env.TORRENT_TIMEOUT || "30000", 10)
};