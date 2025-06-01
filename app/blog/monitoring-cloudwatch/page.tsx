import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function BlogPost() {
  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 max-w-4xl mx-auto">
      <div className="space-y-8">
        {/* Back Button */}
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>

        {/* Article Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>November 2023</span>
            <span>•</span>
            <span>10 min read</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Advanced AWS CloudWatch Monitoring Techniques
          </h1>
          <div className="flex flex-wrap gap-2">
            {["Monitoring", "AWS", "CloudWatch"].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-gray max-w-none">
          <h2>Introduction</h2>
          <p>
            Effective monitoring is crucial for maintaining healthy cloud infrastructure. This guide explores advanced
            CloudWatch techniques for comprehensive monitoring and alerting in AWS environments.
          </p>

          <h2>Custom Metrics</h2>
          <h3>1. Creating Custom Metrics</h3>
          <pre><code>{`# Using AWS CLI
aws cloudwatch put-metric-data \
  --namespace "CustomMetrics" \
  --metric-name "ApplicationErrors" \
  --value 5 \
  --timestamp $(date -u +"%Y-%m-%dT%H:%M:%SZ") \
  --dimensions Service=API,Environment=Production

# Using AWS SDK (Python)
import boto3

cloudwatch = boto3.client('cloudwatch')

response = cloudwatch.put_metric_data(
    Namespace='CustomMetrics',
    MetricData=[
        {
            'MetricName': 'ApplicationErrors',
            'Value': 5,
            'Unit': 'Count',
            'Dimensions': [
                {
                    'Name': 'Service',
                    'Value': 'API'
                },
                {
                    'Name': 'Environment',
                    'Value': 'Production'
                }
            ]
        }
    ]
)`}</code></pre>

          <h3>2. Metric Filters</h3>
          <pre><code>{`# CloudWatch Log Metric Filter
{
  "filterPattern": "[timestamp, requestid, field3, field4, field5, field6, statuscode=5*, size, field9...]",
  "metricValue": "1",
  "metricName": "5xxErrorCount",
  "metricNamespace": "API/Errors"
}`}</code></pre>

          <h2>CloudWatch Dashboards</h2>
          <h3>1. Dashboard Creation</h3>
          <pre><code>{`{
    "widgets": [
        {
            "type": "metric",
            "properties": {
                "metrics": [
                    [ "AWS/EC2", "CPUUtilization", "InstanceId", "i-1234567890" ]
                ],
                "period": 300,
                "stat": "Average",
                "region": "us-west-2",
                "title": "EC2 CPU Utilization"
            }
        },
        {
            "type": "metric",
            "properties": {
                "metrics": [
                    [ "AWS/RDS", "FreeStorageSpace", "DBInstanceIdentifier", "database-1" ]
                ],
                "period": 300,
                "stat": "Average",
                "region": "us-west-2",
                "title": "RDS Free Storage Space"
            }
        }
    ]
}`}</code></pre>

          <h2>Alerting Strategies</h2>
          <h3>1. CloudWatch Alarms</h3>
          <pre><code>{`# Using AWS CLI
aws cloudwatch put-metric-alarm \
  --alarm-name "HighCPUUtilization" \
  --alarm-description "CPU usage exceeds 80%" \
  --metric-name "CPUUtilization" \
  --namespace "AWS/EC2" \
  --statistic "Average" \
  --period 300 \
  --threshold 80 \
  --comparison-operator "GreaterThanThreshold" \
  --evaluation-periods 2 \
  --alarm-actions "arn:aws:sns:region:account-id:topic-name"`}</code></pre>

          <h3>2. Composite Alarms</h3>
          <pre><code>{`aws cloudwatch put-composite-alarm \
  --alarm-name "SystemHealthAlarm" \
  --alarm-rule "ALARM(HighCPUUtilization) AND ALARM(LowFreeMemory)" \
  --alarm-description "System health composite alarm" \
  --alarm-actions "arn:aws:sns:region:account-id:topic-name"`}</code></pre>

          <h2>Log Insights</h2>
          <h3>1. Query Examples</h3>
          <pre><code>{`# Error Analysis Query
fields @timestamp, @message
| filter @message like /Error/
| stats count(*) as errorCount by bin(30m)
| sort errorCount desc

# Latency Analysis
fields @timestamp, @message
| filter @message like /Duration/
| parse @message /Duration: (?<duration>.*?) ms/
| stats avg(duration) as avgLatency by bin(5m)`}</code></pre>

          <h2>Container Monitoring</h2>
          <h3>1. ECS Container Insights</h3>
          <pre><code>{`# Enable Container Insights
aws ecs update-cluster-settings \
  --cluster your-cluster-name \
  --settings name=containerInsights,value=enabled

# CloudWatch Agent Configuration
{
  "metrics": {
    "metrics_collected": {
      "ecs": {
        "metrics_collection_interval": 60
      }
    }
  }
}`}</code></pre>

          <h2>Performance Optimization</h2>
          <h3>1. Metric Math</h3>
          <pre><code>{`{
  "metrics": [
    [ "AWS/EC2", "CPUUtilization", "InstanceId", "i-1234567890" ],
    [ "AWS/EC2", "NetworkIn", "InstanceId", "i-1234567890" ],
    [ "AWS/EC2", "NetworkOut", "InstanceId", "i-1234567890" ],
    {
      "expression": "m1+m2",
      "label": "Total Network Traffic",
      "id": "e1"
    }
  ]
}`}</code></pre>

          <h2>Best Practices Checklist</h2>
          <ul>
            <li>Set appropriate metric collection intervals</li>
            <li>Use metric math for complex monitoring scenarios</li>
            <li>Implement proper alarm thresholds</li>
            <li>Configure actionable alerts</li>
            <li>Maintain organized dashboards</li>
            <li>Implement proper log retention policies</li>
          </ul>

          <h2>Cost Optimization</h2>
          <p>
            Tips for optimizing CloudWatch costs:
          </p>
          <ul>
            <li>Use appropriate metric resolution</li>
            <li>Implement log retention policies</li>
            <li>Clean up unused dashboards and alarms</li>
            <li>Use metric filters effectively</li>
          </ul>

          <h2>Conclusion</h2>
          <p>
            Implementing advanced CloudWatch monitoring techniques helps maintain robust and reliable AWS infrastructure.
            Regular monitoring and optimization of your monitoring strategy ensures effective system oversight and timely
            incident response.
          </p>
        </div>

        {/* Author Bio */}
        <div className="border-t border-border/40 pt-8 mt-8">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-muted h-12 w-12 overflow-hidden">
              <img src="https://loremflickr.com/80/80/person,portrait,tech" alt="Author" className="h-full w-full object-cover" />
            </div>
            <div>
              <h3 className="font-semibold">Sandeep Choudhary</h3>
              <p className="text-sm text-muted-foreground">
                DevOps Engineer with expertise in AWS, Kubernetes, and cloud infrastructure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 