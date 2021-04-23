OUTPUT=$(npm publish)

[[ $OUTPUT =~ .*version\:[[:space:]]*([^[:space:]]*) ]]
VERSION=${BASH_REMATCH[1]}
[[ $OUTPUT =~ .*shasum\:[[:space:]]*([^[:space:]]*) ]]
SHA256=${BASH_REMATCH[1]}

sed -e"s/VERSION/$VERSION/g" -e"s/SHA256/$SHA256/g" \
  ../homebrew-sf-cli/scripts/sf-cli.template > ../homebrew-sf-cli/sf-cli.rb
