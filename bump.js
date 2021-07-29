if (message.author.id === "302050872383242240") {
        if (message.embeds[0].color == "2406327" && message.embeds[0].url == "https://disboard.org/" && (message.embeds[0].description.match(/表示順をアップしたよ/) || message.embeds[0].description.match(/Bump done/) || message.embeds[0].description.match(/Bump effectué/) || message.embeds[0].description.match(/Bump fatto/) || message.embeds[0].description.match(/Podbito serwer/) || message.embeds[0].description.match(/Успешно поднято/) || message.embeds[0].description.match(/갱신했어/) || message.embeds[0].description.match(/Patlatma tamamlandı/))) {
            const m = await message.channel.send(//ここにメッセージ);
            m.delete({ timeout: 7200000 });
            setTimeout(() => { message.channel.send(//ここメッセージ); }, 7200000);
        }
    }
