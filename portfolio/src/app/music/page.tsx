'use client';

import { motion } from 'framer-motion';
import { Music as MusicIcon, Headphones, Radio, Heart, Play, Pause, SkipForward, Volume2 } from 'lucide-react';
import { useEffect, useState } from 'react';

// Spotify Integration Component
const SpotifyPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [topTracks, setTopTracks] = useState([]);
  const [recentTracks, setRecentTracks] = useState([]);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [accessToken, setAccessToken] = useState(null);

  // Spotify Web API Authorization
  useEffect(() => {
    const checkForAccessToken = () => {
      // Check if we have an access token from URL (after authorization)
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');
      
      if (code) {
        // Exchange code for access token
        exchangeCodeForToken(code);
      }
      
      // Check if we have a stored token
      const storedToken = localStorage.getItem('spotify_access_token');
      const tokenExpiry = localStorage.getItem('spotify_token_expiry');
      
      if (storedToken && tokenExpiry && Date.now() < parseInt(tokenExpiry)) {
        setAccessToken(storedToken);
        setIsAuthorized(true);
        fetchUserData(storedToken);
      }
    };

    const exchangeCodeForToken = async (code: string) => {
      try {
        const response = await fetch('/api/spotify/token', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ code })
        });
        
        if (response.ok) {
          const data = await response.json();
          const expiryTime = Date.now() + (data.expires_in * 1000);
          
          localStorage.setItem('spotify_access_token', data.access_token);
          localStorage.setItem('spotify_token_expiry', expiryTime.toString());
          
          setAccessToken(data.access_token);
          setIsAuthorized(true);
          fetchUserData(data.access_token);
          
          // Clean up URL
          window.history.replaceState({}, document.title, window.location.pathname);
        }
      } catch (error) {
        console.error('Token exchange failed:', error);
      }
    };

    const fetchUserData = async (token: string) => {
      try {
        // Fetch current playing track
        const nowPlayingResponse = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        
        if (nowPlayingResponse.ok && nowPlayingResponse.status !== 204) {
          const nowPlaying = await nowPlayingResponse.json();
          if (nowPlaying.item) {
            setCurrentTrack({
              name: nowPlaying.item.name,
              artist: nowPlaying.item.artists[0].name,
              album: nowPlaying.item.album.name,
              image: nowPlaying.item.album.images[0]?.url || "https://via.placeholder.com/64x64/1db954/ffffff?text=♪"
            });
            setIsPlaying(nowPlaying.is_playing);
          }
        }

        // Fetch top tracks
        const topTracksResponse = await fetch('https://api.spotify.com/v1/me/top/tracks?limit=5&time_range=short_term', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        
        if (topTracksResponse.ok) {
          const topTracksData = await topTracksResponse.json();
          setTopTracks(topTracksData.items.map((track: any) => ({
            name: track.name,
            artist: track.artists[0].name,
            image: track.album.images[2]?.url
          })));
        }

        // Fetch recently played
        const recentResponse = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=5', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        
        if (recentResponse.ok) {
          const recentData = await recentResponse.json();
          setRecentTracks(recentData.items.map((item: any) => ({
            name: item.track.name,
            artist: item.track.artists[0].name,
            played_at: item.played_at
          })));
        }
        
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    };

    if (typeof window !== 'undefined') {
      checkForAccessToken();
    }
  }, []);

  const handleAuthorize = async () => {
    const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID || 'ac2187b51d6a4a97a574fff92473acfc';
    // Use secure HTTPS redirect URI
    const redirectUri = encodeURIComponent('https://your-portfolio-domain.vercel.app/music');
    const scopes = encodeURIComponent('user-read-currently-playing user-read-recently-played user-top-read user-read-playback-state');
    
    // For development, we'll use a different approach - show demo data instead of requiring OAuth
    if (process.env.NODE_ENV === 'development') {
      // Demo mode for development
      setIsAuthorized(true);
      setCurrentTrack({
        name: "Currently Playing Demo Track",
        artist: "Your Favorite Artist",
        album: "Latest Album",
        image: "https://via.placeholder.com/64x64/1db954/ffffff?text=♪"
      });
      setTopTracks([
        { name: "Your Top Track #1", artist: "Artist Name", image: "https://via.placeholder.com/32x32/1db954/ffffff?text=1" },
        { name: "Your Top Track #2", artist: "Artist Name", image: "https://via.placeholder.com/32x32/1db954/ffffff?text=2" },
        { name: "Your Top Track #3", artist: "Artist Name", image: "https://via.placeholder.com/32x32/1db954/ffffff?text=3" }
      ]);
      setRecentTracks([
        { name: "Recently Played #1", artist: "Artist", played_at: new Date().toISOString() },
        { name: "Recently Played #2", artist: "Artist", played_at: new Date(Date.now() - 3600000).toISOString() },
        { name: "Recently Played #3", artist: "Artist", played_at: new Date(Date.now() - 7200000).toISOString() }
      ]);
      return;
    }
    
    // Production: Redirect to Spotify authorization with secure HTTPS URI
    window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes}&show_dialog=true`;
  };

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700">
      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
        <MusicIcon className="w-6 h-6 text-red-500" />
        Spotify Player (Free Integration)
      </h3>
      
      {!isAuthorized ? (
        <div className="text-center py-8">
          <motion.button
            onClick={handleAuthorize}
            className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 font-medium shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🎵 View Music Demo
          </motion.button>
          <p className="text-gray-400 text-sm mt-2">
            Development mode - Shows demo data • Production will use real Spotify
          </p>
          <div className="mt-4 p-3 bg-blue-600/10 border border-blue-500/20 rounded-lg">
            <p className="text-blue-400 text-xs font-medium">🔒 Secure HTTPS OAuth in production</p>
            <p className="text-blue-400 text-xs">🎵 Demo mode for local development</p>
            <p className="text-blue-400 text-xs">✅ Real Spotify integration ready for deployment</p>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Current Track */}
          {currentTrack && (
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img 
                  src={currentTrack.image} 
                  alt={currentTrack.name}
                  className="w-12 h-12 rounded-lg"
                />
                <div>
                  <p className="text-white font-semibold">{currentTrack.name}</p>
                  <p className="text-gray-400 text-sm">{currentTrack.artist}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <motion.button
                  className="p-2 bg-green-600/20 rounded-full hover:bg-green-600/30 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <SkipForward className="w-4 h-4 text-green-500" />
                </motion.button>
                <motion.button
                  className="p-3 bg-green-600 rounded-full hover:bg-green-700 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5 text-white" />
                  ) : (
                    <Play className="w-5 h-5 text-white" />
                  )}
                </motion.button>
                <motion.button
                  className="p-2 bg-green-600/20 rounded-full hover:bg-green-600/30 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Volume2 className="w-4 h-4 text-green-500" />
                </motion.button>
              </div>
            </div>
          )}

          {/* Top Tracks */}
          {topTracks.length > 0 && (
            <div>
              <h4 className="text-white font-semibold mb-3">Your Top Tracks</h4>
              <div className="space-y-2">
                {topTracks.map((track, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center justify-between p-2 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <div>
                      <p className="text-white text-sm font-medium">{track.name}</p>
                      <p className="text-gray-400 text-xs">{track.artist}</p>
                    </div>
                    <div className="text-green-500 text-xs">#{index + 1}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Recent Tracks */}
          {recentTracks.length > 0 && (
            <div>
              <h4 className="text-white font-semibold mb-3">Recently Played</h4>
              <div className="space-y-2">
                {recentTracks.slice(0, 3).map((track: any, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center justify-between p-2 bg-gray-700/30 rounded-lg"
                  >
                    <div>
                      <p className="text-white text-sm font-medium">{track.name}</p>
                      <p className="text-gray-400 text-xs">{track.artist}</p>
                    </div>
                    <p className="text-gray-500 text-xs">
                      {new Date(track.played_at).toLocaleDateString()}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Disconnect Button */}
          <div className="pt-4 border-t border-gray-700">
            <motion.button
              onClick={() => {
                localStorage.removeItem('spotify_access_token');
                localStorage.removeItem('spotify_token_expiry');
                setIsAuthorized(false);
                setCurrentTrack(null);
                setTopTracks([]);
                setRecentTracks([]);
              }}
              className="px-4 py-2 text-gray-400 hover:text-white text-sm transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Disconnect Spotify
            </motion.button>
          </div>
        </div>
      )}
    </div>
  );
};

export default function MusicPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Music & <span className="text-red-500">Interests</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            My musical journey and current listening preferences powered by Spotify (FREE)
          </p>
        </motion.div>
        
        {/* Spotify Player */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <SpotifyPlayer />
        </motion.div>

        {/* Music Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { icon: <Headphones className="w-6 h-6" />, title: "Now Playing", desc: "Current track", value: "Connect to Apple Music" },
            { icon: <Heart className="w-6 h-6" />, title: "Top Tracks", desc: "Most played songs", value: "Discover your favorites" },
            { icon: <Radio className="w-6 h-6" />, title: "Recent Activity", desc: "Listening history", value: "Track your journey" },
            { icon: <MusicIcon className="w-6 h-6" />, title: "Playlists", desc: "Curated collections", value: "Create & share" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-red-500/50 transition-all duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="text-red-500 mb-3 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-white font-semibold mb-1 text-center">{item.title}</h3>
              <p className="text-gray-400 text-sm text-center mb-2">{item.desc}</p>
              <p className="text-red-400 text-xs text-center font-medium">{item.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Integration Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 text-center"
        >
          <motion.div
            animate={{ 
              rotate: [0, 360]
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, linear: true }
            }}
            className="mb-6"
          >
            <MusicIcon className="w-12 h-12 text-red-500 mx-auto" />
          </motion.div>
          
          <h2 className="text-2xl font-bold text-white mb-4">
            Spotify Integration (100% FREE)
          </h2>
          <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto mb-6">
            This page features Spotify Web API integration - completely free with no Apple Developer Program required! 
            The demo shows how real music data would be displayed when connected to your Spotify account.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2 text-green-400">
              <p>✅ Spotify Web API - Completely FREE</p>
              <p>✅ No Apple Developer Program ($99/year)</p>
              <p>✅ Real listening data from your account</p>
              <p>✅ Top tracks, recent plays, playlists</p>
            </div>
            <div className="space-y-2 text-gray-400">
              <p>🎵 Real-time now playing</p>
              <p>📊 Listening statistics and insights</p>
              <p>🎧 Personal playlist access</p>
              <p>📱 Easy setup with Spotify for Developers</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}