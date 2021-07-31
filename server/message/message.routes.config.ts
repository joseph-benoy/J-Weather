import express from 'express';
import debug from 'debug';
import CommonRoutesConfig from '../common/common.routes.config';

const log:debug.IDebugger = debug("app:message");

class MessageRoutesConfig extends 