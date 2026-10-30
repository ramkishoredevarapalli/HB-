const googleSignInPlugin = '@react-native-google-signin/google-signin'

module.exports = ({ config }) => {
  const iosClientId = process.env.EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID
  const iosClientIdPrefix = iosClientId?.match(/^(.+)\.apps\.googleusercontent\.com$/)?.[1]
  const plugins = (config.plugins ?? []).filter((plugin) => {
    const name = Array.isArray(plugin) ? plugin[0] : plugin
    return name !== googleSignInPlugin
  })

  if (iosClientIdPrefix) {
    plugins.push([
      googleSignInPlugin,
      { iosUrlScheme: `com.googleusercontent.apps.${iosClientIdPrefix}` },
    ])
  }

  return { ...config, plugins }
}
