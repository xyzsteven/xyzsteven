---
slug: arkaiv-software-list
title: "Arkaiv Software List"
authors: [xyzsteven]
tags: [software, productivity, open-source]
description: A curated list of free and open-source applications I rely on daily for productivity, system customization, and experimentation.
---

# CachyOS Systemd Silent Boot

If you want a seamless, aesthetic boot experience—similar to Windows or macOS—without the clutter of kernel logs and bootloader menus, this guide will walk you through setting up a true silent boot on CachyOS using `systemd-boot` and Plymouth.

## Prerequisites
* **OS:** CachyOS (or Arch Linux derivatives)
* **Bootloader:** systemd-boot (managed via `sdboot-manage`)
* **Initramfs Generator:** mkinitcpio

---

## Step 1: Install the Plymouth Theme
First, make sure Plymouth and your desired theme are installed. We will use the official CachyOS theme for this guide.

Open your terminal and run:
```bash
sudo pacman -S cachyos-plymouth-theme
```

## Step 2: Configure mkinitcpio Hooks
Plymouth needs to be loaded very early in the boot process. We need to add it to our initramfs configuration.

1. Open your mkinitcpio configuration file:
   ```bash
   sudo nano /etc/mkinitcpio.conf
   ```
2. Scroll down to the `HOOKS=(...)` array. Add `plymouth` right after `sd-vconsole` (or `udev` if you are not using systemd hooks).
   
   *Note: For Plymouth versions 24.004.60 and newer, the `sd-plymouth` hook has been deprecated and merged. You must use the standard `plymouth` hook even if you are using systemd in your initramfs.*

   Your `HOOKS` line should look something like this:
   ```text
   HOOKS=(base systemd autodetect microcode kms modconf block keyboard sd-vconsole plymouth filesystems fsck)
   ```
3. Save and exit the file.

## Step 3: Apply the Theme 
Next, set the default Plymouth theme and regenerate your initramfs images to apply the new hook.

Run the following command (this may take a moment):
```bash
sudo plymouth-set-default-theme -R cachyos
```

## Step 4: Configure Kernel Parameters for Silent Boot
To hide the kernel boot logs and blinking cursors, we need to pass specific parameters to the kernel. In CachyOS, `systemd-boot` entries are managed by `sdboot-manage`.

1. Open the `sdboot-manage` configuration file:
   ```bash
   sudo nano /etc/sdboot-manage.conf
   ```
2. Locate the `LINUX_OPTIONS` variable. Append the following silent boot parameters inside the quotation marks:
   ```text
   zswap.enabled=0 nowatchdog quiet splash
   ```
   Your updated line should look similar to this:
   ```text
   LINUX_OPTIONS="zswap.enabled=0 nowatchdog quiet splash"
   ```
3. Save and exit the file.
4. Generate the new bootloader entries to apply the changes:
   ```bash
   sudo sdboot-manage gen
   ```

## Step 5: Hide the systemd-boot Menu
Even with a silent kernel, `systemd-boot` might still show a boot selection menu for a few seconds. To bypass this and jump straight into the Plymouth animation, we need to set the menu timeout to zero.

1. Open the systemd-boot loader configuration:
   ```bash
   sudo nano /boot/loader/loader.conf
   ```
   *(Note: Depending on your partition setup, this might also be located at `/efi/loader/loader.conf`)*
2. Change the `timeout` value to `0`:
   ```text
   timeout 0
   ```
3. Save and exit. 

*Tip: If you ever need to access the boot menu again for troubleshooting, simply press and hold the **Spacebar** immediately after turning on your PC.*

## Step 6: Reboot
Everything is set! Restart your computer to enjoy your clean, text-free, and seamless boot experience.