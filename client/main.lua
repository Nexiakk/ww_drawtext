local function showHelp(message, time)
    SendNUIMessage({
        type = "HELP",
        action = "SHOW",
        msg = message
    })
    if time then
        Wait(time)
        SendNUIMessage({
            type = "HELP",
            action = "HIDE"
        })
    end
end

local function hideHelp()
    SendNUIMessage({
        type = "HELP",
        action = "HIDE"
    })
end

RegisterNetEvent('help:show', function(message, time)
    showHelp(message, time)
end)

RegisterNetEvent('help:hide', function()
    hideHelp()
end)

exports('showHelp', showHelp)
exports('hideHelp', hideHelp)