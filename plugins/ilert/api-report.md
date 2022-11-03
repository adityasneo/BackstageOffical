## API Report File for "@backstage/plugin-ilert"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
/// <reference types="react" />

import { ApiRef } from '@backstage/core-plugin-api';
import { BackstagePlugin } from '@backstage/core-plugin-api';
import { ConfigApi } from '@backstage/core-plugin-api';
import { DiscoveryApi } from '@backstage/core-plugin-api';
import { Entity } from '@backstage/catalog-model';
import { IconComponent } from '@backstage/core-plugin-api';
import { RouteRef } from '@backstage/core-plugin-api';

// @public (undocumented)
export const ACCEPTED = 'ACCEPTED';

// @public (undocumented)
export interface Alert {
  // (undocumented)
  alertKey: string;
  // (undocumented)
  alertSource: AlertSource | null;
  // (undocumented)
  assignedTo: User | null;
  // (undocumented)
  commentPublishToSubscribers: boolean;
  // (undocumented)
  commentText: string;
  // (undocumented)
  details: string;
  // (undocumented)
  id: number;
  // (undocumented)
  images: Image_2[];
  // (undocumented)
  links: Link[];
  // (undocumented)
  logEntries: LogEntry[];
  // (undocumented)
  priority: AlertPriority;
  // (undocumented)
  reportTime: string;
  // (undocumented)
  resolvedOn: string;
  // (undocumented)
  responders: Responder[];
  // (undocumented)
  status: AlertStatus;
  // (undocumented)
  subscribers: Subscriber[];
  // (undocumented)
  summary: string;
}

// @public (undocumented)
export interface AlertAction {
  // (undocumented)
  extensionId?: string;
  // (undocumented)
  history?: AlertActionHistory[];
  // (undocumented)
  name: string;
  // (undocumented)
  type: string;
  // (undocumented)
  webhookId: string;
}

// @public (undocumented)
export interface AlertActionHistory {
  // (undocumented)
  actor: User;
  // (undocumented)
  alertId: number;
  // (undocumented)
  id: string;
  // (undocumented)
  success: boolean;
  // (undocumented)
  webhookId: string;
}

// @public (undocumented)
export type AlertPriority = 'HIGH' | 'LOW';

// @public (undocumented)
export interface AlertResponder {
  // (undocumented)
  disabled: boolean;
  // (undocumented)
  group: 'SUGGESTED' | 'USER' | 'ESCALATION_POLICY' | 'ON_CALL_SCHEDULE';
  // (undocumented)
  id: number;
  // (undocumented)
  name: string;
}

// @public (undocumented)
export interface AlertSource {
  // (undocumented)
  active?: boolean;
  // (undocumented)
  alertCreation?: AlertSourceAlertCreation;
  // (undocumented)
  alertPriorityRule?: AlertSourceAlertPriorityRule;
  // (undocumented)
  autoResolutionTimeout?: string;
  // (undocumented)
  autotaskMetadata?: AlertSourceAutotaskMetadata;
  // (undocumented)
  darkIconUrl?: string;
  // (undocumented)
  emailFiltered?: boolean;
  // (undocumented)
  emailPredicates?: AlertSourceEmailPredicate[];
  // (undocumented)
  emailResolveFiltered?: boolean;
  // (undocumented)
  emailResolvePredicates?: AlertSourceEmailPredicate[];
  // (undocumented)
  escalationPolicy: EscalationPolicy;
  // (undocumented)
  filterOperator?: AlertSourceFilterOperator;
  // (undocumented)
  heartbeat?: AlertSourceHeartbeat;
  // (undocumented)
  iconUrl?: string;
  // (undocumented)
  id: number;
  // (undocumented)
  integrationKey?: string;
  // (undocumented)
  integrationType: AlertSourceIntegrationType;
  // (undocumented)
  lightIconUrl?: string;
  // (undocumented)
  name: string;
  // (undocumented)
  resolveFilterOperator?: AlertSourceFilterOperator;
  // (undocumented)
  status: AlertSourceStatus;
  // (undocumented)
  supportHours?: AlertSourceSupportHours;
  // (undocumented)
  teams: TeamShort[];
}

// @public (undocumented)
export type AlertSourceAlertCreation =
  | 'ONE_ALERT_PER_EMAIL'
  | 'ONE_ALERT_PER_EMAIL_SUBJECT'
  | 'ONE_PENDING_ALERT_ALLOWED'
  | 'ONE_OPEN_ALERT_ALLOWED'
  | 'OPEN_RESOLVE_ON_EXTRACTION';

// @public (undocumented)
export type AlertSourceAlertPriorityRule =
  | 'HIGH'
  | 'LOW'
  | 'HIGH_DURING_SUPPORT_HOURS'
  | 'LOW_DURING_SUPPORT_HOURS';

// @public (undocumented)
export interface AlertSourceAutotaskMetadata {
  // (undocumented)
  apiIntegrationCode: string;
  // (undocumented)
  secret: string;
  // (undocumented)
  userName: string;
  // (undocumented)
  webServer: string;
}

// @public (undocumented)
export interface AlertSourceEmailPredicate {
  // (undocumented)
  criteria:
    | 'CONTAINS_ANY_WORDS'
    | 'CONTAINS_NOT_WORDS'
    | 'CONTAINS_STRING'
    | 'CONTAINS_NOT_STRING'
    | 'IS_STRING'
    | 'IS_NOT_STRING'
    | 'MATCHES_REGEX'
    | 'MATCHES_NOT_REGEX';
  // (undocumented)
  field: 'EMAIL_FROM' | 'EMAIL_SUBJECT' | 'EMAIL_BODY';
  // (undocumented)
  value: string;
}

// @public (undocumented)
export type AlertSourceFilterOperator = 'AND' | 'OR';

// @public (undocumented)
export interface AlertSourceHeartbeat {
  // (undocumented)
  intervalSec: number;
  // (undocumented)
  status: 'OVERDUE' | 'ON_TIME' | 'NEVER_RECEIVED';
  // (undocumented)
  summary: string;
}

// @public (undocumented)
export type AlertSourceIntegrationType =
  | 'NAGIOS'
  | 'ICINGA'
  | 'EMAIL'
  | 'SMS'
  | 'API'
  | 'CRN'
  | 'HEARTBEAT'
  | 'PRTG'
  | 'PINGDOM'
  | 'CLOUDWATCH'
  | 'AWSPHD'
  | 'STACKDRIVER'
  | 'INSTANA'
  | 'ZABBIX'
  | 'SOLARWINDS'
  | 'PROMETHEUS'
  | 'NEWRELIC'
  | 'GRAFANA'
  | 'GITHUB'
  | 'DATADOG'
  | 'UPTIMEROBOT'
  | 'APPDYNAMICS'
  | 'DYNATRACE'
  | 'TOPDESK'
  | 'STATUSCAKE'
  | 'MONITOR'
  | 'TOOL'
  | 'CHECKMK'
  | 'AUTOTASK'
  | 'AWSBUDGET'
  | 'KENTIXAM'
  | 'CONSUL'
  | 'ZAMMAD'
  | 'SIGNALFX'
  | 'SPLUNK'
  | 'KUBERNETES'
  | 'SEMATEXT'
  | 'SENTRY'
  | 'SUMOLOGIC'
  | 'RAYGUN'
  | 'MXTOOLBOX'
  | 'ESWATCHER'
  | 'AMAZONSNS'
  | 'KAPACITOR'
  | 'CORTEXXSOAR'
  | string;

// @public (undocumented)
export type AlertSourceStatus =
  | 'PENDING'
  | 'ALL_ACCEPTED'
  | 'ALL_RESOLVED'
  | 'IN_MAINTENANCE'
  | 'DISABLED';

// @public (undocumented)
export interface AlertSourceSupportDay {
  // (undocumented)
  end: string;
  // (undocumented)
  start: string;
}

// @public (undocumented)
export interface AlertSourceSupportHours {
  // (undocumented)
  autoRaiseAlerts: boolean;
  // (undocumented)
  supportDays: {
    MONDAY: AlertSourceSupportDay;
    TUESDAY: AlertSourceSupportDay;
    WEDNESDAY: AlertSourceSupportDay;
    THURSDAY: AlertSourceSupportDay;
    FRIDAY: AlertSourceSupportDay;
    SATURDAY: AlertSourceSupportDay;
    SUNDAY: AlertSourceSupportDay;
  };
  // (undocumented)
  timezone: AlertSourceTimeZone;
}

// @public (undocumented)
export type AlertSourceTimeZone =
  | 'Europe/Berlin'
  | 'America/New_York'
  | 'America/Los_Angeles'
  | 'Asia/Istanbul';

// @public (undocumented)
export type AlertStatus = typeof PENDING | typeof ACCEPTED | typeof RESOLVED;

// @public (undocumented)
export const DEGRADED = 'DEGRADED';

// @public (undocumented)
export const EntityILertCard: () => JSX.Element;

// @public (undocumented)
export interface EscalationPolicy {
  // (undocumented)
  escalationRules: EscalationRule[];
  // (undocumented)
  frequency?: number;
  // (undocumented)
  id: number;
  // (undocumented)
  name: string;
  // (undocumented)
  newEscalationRule: EscalationRule;
  // (undocumented)
  repeating?: boolean;
  // (undocumented)
  teams: TeamShort[];
}

// @public (undocumented)
export interface EscalationRule {
  // (undocumented)
  escalationTimeout: number;
  // (undocumented)
  schedule: Schedule | null;
  // (undocumented)
  user: User | null;
}

// @public (undocumented)
export type EventRequest = {
  integrationKey: string;
  summary: string;
  details: string;
  userName: string;
  source: string;
};

// @public (undocumented)
export type GetAlertsCountOpts = {
  states?: AlertStatus[];
};

// @public (undocumented)
export type GetAlertsOpts = {
  maxResults?: number;
  startIndex?: number;
  states?: AlertStatus[];
  alertSources?: number[];
};

// @public (undocumented)
export type GetServicesOpts = {
  maxResults?: number;
  startIndex?: number;
};

// @public (undocumented)
export type GetStatusPagesOpts = {
  maxResults?: number;
  startIndex?: number;
};

// @public (undocumented)
export interface ILertApi {
  // (undocumented)
  acceptAlert(alert: Alert, userName: string): Promise<Alert>;
  // (undocumented)
  addImmediateMaintenance(
    alertSourceId: number,
    minutes: number,
  ): Promise<void>;
  // (undocumented)
  assignAlert(alert: Alert, responder: AlertResponder): Promise<Alert>;
  // (undocumented)
  createAlert(eventRequest: EventRequest): Promise<boolean>;
  // (undocumented)
  disableAlertSource(alertSource: AlertSource): Promise<AlertSource>;
  // (undocumented)
  enableAlertSource(alertSource: AlertSource): Promise<AlertSource>;
  // (undocumented)
  fetchAlert(id: number): Promise<Alert>;
  // (undocumented)
  fetchAlertActions(alert: Alert): Promise<AlertAction[]>;
  // (undocumented)
  fetchAlertResponders(alert: Alert): Promise<AlertResponder[]>;
  // (undocumented)
  fetchAlerts(opts?: GetAlertsOpts): Promise<Alert[]>;
  // (undocumented)
  fetchAlertsCount(opts?: GetAlertsCountOpts): Promise<number>;
  // (undocumented)
  fetchAlertSource(idOrIntegrationKey: number | string): Promise<AlertSource>;
  // (undocumented)
  fetchAlertSourceOnCalls(alertSource: AlertSource): Promise<OnCall[]>;
  // (undocumented)
  fetchAlertSources(): Promise<AlertSource[]>;
  // (undocumented)
  fetchOnCallSchedules(): Promise<Schedule[]>;
  // (undocumented)
  fetchServices(opts?: GetServicesOpts): Promise<Service[]>;
  // (undocumented)
  fetchStatusPages(opts?: GetStatusPagesOpts): Promise<StatusPage[]>;
  // (undocumented)
  fetchUsers(): Promise<User[]>;
  // (undocumented)
  getAlertDetailsURL(alert: Alert): string;
  // (undocumented)
  getAlertSourceDetailsURL(alertSource: AlertSource | null): string;
  // (undocumented)
  getEscalationPolicyDetailsURL(escalationPolicy: EscalationPolicy): string;
  // (undocumented)
  getScheduleDetailsURL(schedule: Schedule): string;
  // (undocumented)
  getServiceDetailsURL(service: Service): string;
  // (undocumented)
  getStatusPageDetailsURL(statusPage: StatusPage): string;
  // (undocumented)
  getStatusPageURL(statusPage: StatusPage): string;
  // (undocumented)
  getUserInitials(user: User | null): string;
  // (undocumented)
  getUserPhoneNumber(user: User | null): string;
  // (undocumented)
  overrideShift(
    scheduleId: number,
    userId: number,
    start: string,
    end: string,
  ): Promise<Schedule>;
  // (undocumented)
  resolveAlert(alert: Alert, userName: string): Promise<Alert>;
  // (undocumented)
  triggerAlertAction(alert: Alert, action: AlertAction): Promise<void>;
}

// @public (undocumented)
export const ilertApiRef: ApiRef<ILertApi>;

// @public (undocumented)
export const ILertCard: () => JSX.Element;

// @public (undocumented)
export class ILertClient implements ILertApi {
  constructor(opts: {
    discoveryApi: DiscoveryApi;
    baseUrl: string;
    proxyPath: string;
  });
  // (undocumented)
  acceptAlert(alert: Alert, userName: string): Promise<Alert>;
  // (undocumented)
  addImmediateMaintenance(
    alertSourceId: number,
    minutes: number,
  ): Promise<void>;
  // (undocumented)
  assignAlert(alert: Alert, responder: AlertResponder): Promise<Alert>;
  // (undocumented)
  createAlert(eventRequest: EventRequest): Promise<boolean>;
  // (undocumented)
  disableAlertSource(alertSource: AlertSource): Promise<AlertSource>;
  // (undocumented)
  enableAlertSource(alertSource: AlertSource): Promise<AlertSource>;
  // (undocumented)
  fetchAlert(id: number): Promise<Alert>;
  // (undocumented)
  fetchAlertActions(alert: Alert): Promise<AlertAction[]>;
  // (undocumented)
  fetchAlertResponders(alert: Alert): Promise<AlertResponder[]>;
  // (undocumented)
  fetchAlerts(opts?: GetAlertsOpts): Promise<Alert[]>;
  // (undocumented)
  fetchAlertsCount(opts?: GetAlertsCountOpts): Promise<number>;
  // (undocumented)
  fetchAlertSource(idOrIntegrationKey: number | string): Promise<AlertSource>;
  // (undocumented)
  fetchAlertSourceOnCalls(alertSource: AlertSource): Promise<OnCall[]>;
  // (undocumented)
  fetchAlertSources(): Promise<AlertSource[]>;
  // (undocumented)
  fetchOnCallSchedules(): Promise<Schedule[]>;
  // (undocumented)
  fetchServices(opts?: GetServicesOpts): Promise<Service[]>;
  // (undocumented)
  fetchStatusPages(opts?: GetStatusPagesOpts): Promise<StatusPage[]>;
  // (undocumented)
  fetchUsers(): Promise<User[]>;
  // (undocumented)
  static fromConfig(
    configApi: ConfigApi,
    discoveryApi: DiscoveryApi,
  ): ILertClient;
  // (undocumented)
  getAlertDetailsURL(alert: Alert): string;
  // (undocumented)
  getAlertSourceDetailsURL(alertSource: AlertSource | null): string;
  // (undocumented)
  getEscalationPolicyDetailsURL(escalationPolicy: EscalationPolicy): string;
  // (undocumented)
  getScheduleDetailsURL(schedule: Schedule): string;
  // (undocumented)
  getServiceDetailsURL(service: Service): string;
  // (undocumented)
  getStatusPageDetailsURL(statusPage: StatusPage): string;
  // (undocumented)
  getStatusPageURL(statusPage: StatusPage): string;
  // (undocumented)
  getUserInitials(user: User | null): string;
  // (undocumented)
  getUserPhoneNumber(user: User | null): string;
  // (undocumented)
  overrideShift(
    scheduleId: number,
    userId: number,
    start: string,
    end: string,
  ): Promise<Schedule>;
  // (undocumented)
  resolveAlert(alert: Alert, userName: string): Promise<Alert>;
  // (undocumented)
  triggerAlertAction(alert: Alert, action: AlertAction): Promise<void>;
}

// @public (undocumented)
export const ILertIcon: IconComponent;

// @public (undocumented)
export const ILertPage: () => JSX.Element;

// @public (undocumented)
const ilertPlugin: BackstagePlugin<
  {
    root: RouteRef<undefined>;
  },
  {},
  {}
>;
export { ilertPlugin };
export { ilertPlugin as plugin };

// @public (undocumented)
export const iLertRouteRef: RouteRef<undefined>;

// @public (undocumented)
interface Image_2 {
  // (undocumented)
  alt: string;
  // (undocumented)
  href: string;
  // (undocumented)
  src: string;
}
export { Image_2 as Image };

// @public (undocumented)
const isPluginApplicableToEntity: (entity: Entity) => boolean;
export { isPluginApplicableToEntity as isILertAvailable };
export { isPluginApplicableToEntity };

// @public (undocumented)
export type Language = 'de' | 'en';

// @public (undocumented)
export interface Link {
  // (undocumented)
  href: string;
  // (undocumented)
  text: string;
}

// @public (undocumented)
export interface LogEntry {
  // (undocumented)
  alertId?: number;
  // (undocumented)
  filterTypes?: string[];
  // (undocumented)
  iconClass?: string;
  // (undocumented)
  iconName?: string;
  // (undocumented)
  id: number;
  // (undocumented)
  logEntryType: string;
  // (undocumented)
  text: string;
  // (undocumented)
  timestamp: string;
}

// @public (undocumented)
export const MAJOR_OUTAGE = 'MAJOR_OUTAGE';

// @public (undocumented)
export interface OnCall {
  // (undocumented)
  end: string;
  // (undocumented)
  escalationLevel: number;
  // (undocumented)
  escalationPolicy: EscalationPolicy;
  // (undocumented)
  schedule?: Schedule;
  // (undocumented)
  start: string;
  // (undocumented)
  user: User;
}

// @public (undocumented)
export const OPERATIONAL = 'OPERATIONAL';

// @public (undocumented)
export const PARTIAL_OUTAGE = 'PARTIAL_OUTAGE';

// @public (undocumented)
export const PENDING = 'PENDING';

// @public (undocumented)
export interface Phone {
  // (undocumented)
  number: string;
  // (undocumented)
  regionCode: string;
}

// @public (undocumented)
export const PRIVATE = 'PRIVATE';

// @public (undocumented)
export const PUBLIC = 'PUBLIC';

// @public (undocumented)
export const RESOLVED = 'RESOLVED';

// @public (undocumented)
export interface Responder {
  // (undocumented)
  acceptedAt?: string;
  // (undocumented)
  status: string;
  // (undocumented)
  user: User;
}

// @public (undocumented)
export const Router: () => JSX.Element;

// @public (undocumented)
export interface Schedule {
  // (undocumented)
  currentShift: Shift;
  // (undocumented)
  id: number;
  // (undocumented)
  name: string;
  // (undocumented)
  nextShift: Shift;
  // (undocumented)
  overrides: Shift[];
  // (undocumented)
  shifts: Shift[];
  // (undocumented)
  startsOn: string;
  // (undocumented)
  teams: TeamShort[];
  // (undocumented)
  timezone: string;
}

// @public (undocumented)
export interface Service {
  // (undocumented)
  id: number;
  // (undocumented)
  name: string;
  // (undocumented)
  status: ServiceStatus;
  // (undocumented)
  uptime: Uptime;
}

// @public (undocumented)
export type ServiceStatus =
  | typeof OPERATIONAL
  | typeof UNDER_MAINTENANCE
  | typeof DEGRADED
  | typeof PARTIAL_OUTAGE
  | typeof MAJOR_OUTAGE;

// @public (undocumented)
export interface Shift {
  // (undocumented)
  end: string;
  // (undocumented)
  start: string;
  // (undocumented)
  user: User;
}

// @public (undocumented)
export interface StatusPage {
  // (undocumented)
  domain: string;
  // (undocumented)
  id: number;
  // (undocumented)
  name: string;
  // (undocumented)
  status: ServiceStatus;
  // (undocumented)
  subdomain: string;
  // (undocumented)
  visibility: StatusPageVisibility;
}

// @public (undocumented)
export type StatusPageVisibility = typeof PRIVATE | typeof PUBLIC;

// @public (undocumented)
export interface Subscriber {
  // (undocumented)
  id: number;
  // (undocumented)
  name: string;
  // (undocumented)
  type: SubscriberType;
}

// @public (undocumented)
export type SubscriberType = 'TEAM' | 'USER';

// @public (undocumented)
export type TableState = {
  page: number;
  pageSize: number;
};

// @public (undocumented)
export interface TeamMember {
  // (undocumented)
  role: 'STAKEHOLDER' | 'RESPONDER' | 'USER' | 'ADMIN';
  // (undocumented)
  user: User;
}

// @public (undocumented)
export interface TeamShort {
  // (undocumented)
  id: number;
  // (undocumented)
  name: string;
}

// @public (undocumented)
export const UNDER_MAINTENANCE = 'UNDER_MAINTENANCE';

// @public (undocumented)
export interface Uptime {
  // (undocumented)
  uptimePercentage: UptimePercentage;
}

// @public (undocumented)
export interface UptimePercentage {
  // (undocumented)
  p90: number;
}

// @public (undocumented)
export interface User {
  // (undocumented)
  department: string;
  // (undocumented)
  email: string;
  // (undocumented)
  firstName: string;
  // (undocumented)
  id: number;
  // (undocumented)
  landline: Phone;
  // (undocumented)
  language?: Language;
  // (undocumented)
  lastName: string;
  // (undocumented)
  mobile: Phone;
  // (undocumented)
  notificationPreferences?: any[];
  // (undocumented)
  position: string;
  // (undocumented)
  role?: UserRole;
  // (undocumented)
  timezone?: string;
  // (undocumented)
  username: string;
}

// @public (undocumented)
export type UserRole =
  | 'USER'
  | 'ADMIN'
  | 'STAKEHOLDER'
  | 'ACCOUNT_OWNER'
  | 'RESPONDER';

// (No @packageDocumentation comment for this package)
```