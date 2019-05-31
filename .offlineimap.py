#!/usr/bin/python
import keyring

def get_keychain_pass(server=None, account=None):
    return keyring.get_password(server, account)
