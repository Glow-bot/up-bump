if (message.webhookID && message.webhookID === '761562078095867916') {
        if (message.embeds[0].color === 7506394) {
            const unoti = await message.channel.send(//ここにメッセージ)
            unoti.delete({ timeout: 60000 });
            setTimeout(() => {
                message.channel.send(//ここにもメッセージ);
            }, 3600000);
        }
    }
