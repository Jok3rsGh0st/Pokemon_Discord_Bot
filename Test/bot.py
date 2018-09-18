#Pokemon Go Western Cape

import discord
from discord.ext import commands
from discord.ext.commands import Bot
#import asyncio

bot = commands.Bot(command_prefix="#")

@bot.event
async def on_ready():
	print ("Ready when you are Justin")
	print ("I am running on" + bot.user.name)

bot.run("NDg5NjYyODU1NTMzMjk3NjY1.DnwKhg.xfEII9PzY3CjUcCew4o8KXq5Ejk")